"""Publish web-sized copies of approved sector renders and the two approved PDFs."""
import argparse
import hashlib
import json
import shutil
from pathlib import Path
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument('renders', type=Path)
parser.add_argument('catalogs', type=Path)
parser.add_argument('room_cover', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
destination = root / 'public/images/mekanlar'
destination.mkdir(parents=True, exist_ok=True)
plan = json.loads((args.renders / 'generation_manifest.json').read_text(encoding='utf-8'))
models = json.loads((root / 'src/lib/lambiri-models.json').read_text(encoding='utf-8'))
assert [p['id'] for p in plan] == list(range(1, 30))
assets = []
for item, model in zip(plan, models):
    source = args.renders / f"Model {item['id']:02d}.png"
    original_hash = hashlib.sha256(source.read_bytes()).hexdigest()
    assert item['visual_status'] == 'reviewed'
    assert (item['width_cm'], item['length_cm']) == (model['widthCm'], model['lengthCm'])
    with Image.open(source) as original:
        picture = original.convert('RGB')
        stem = f"model-{item['id']:02d}"
        picture.save(destination / f'{stem}.webp', quality=92, method=6)
        preview = picture.copy()
        preview.thumbnail((600, 800), Image.Resampling.LANCZOS)
        preview.save(destination / f'{stem}-preview.webp', quality=85, method=6)
        assets.append({
            'id': item['id'], 'widthCm': item['width_cm'], 'lengthCm': item['length_cm'],
            'imageWidth': picture.width, 'imageHeight': picture.height,
            'image': f'/images/mekanlar/{stem}.webp',
            'preview': f'/images/mekanlar/{stem}-preview.webp',
        })
    assert hashlib.sha256(source.read_bytes()).hexdigest() == original_hash
(root / 'src/lib/space-models.json').write_text(json.dumps(assets, indent=2) + '\n', encoding='utf-8')
cover_folder = root / 'public/images/catalogs'
cover_folder.mkdir(parents=True, exist_ok=True)
with Image.open(args.room_cover) as original:
    cover = original.convert('RGB')
    cover.thumbnail((900, 1200), Image.Resampling.LANCZOS)
    cover.save(cover_folder / 'iwall-mekanlar.webp', quality=88, method=6)
for name in ('s-curve-02', 'dy-rib-01', 'kl-linear-03'):
    with Image.open(root / f'public/images/{name}.jpg') as original:
        cover = original.convert('RGB')
        cover.thumbnail((900, 1200), Image.Resampling.LANCZOS)
        cover.save(cover_folder / f'{name}.webp', quality=88, method=6)
pdf_folder = root / 'public/catalogs'
pdf_folder.mkdir(parents=True, exist_ok=True)
for filename, target in [
    ('i-WALL Mekan Katalogu 2026.pdf', 'iwall-mekan-katalogu.pdf'),
    ('i-WALL Sektorel Mekan Katalogu 2026.pdf', 'iwall-sektorel-mekan-katalogu.pdf'),
]:
    source = args.catalogs / filename
    shutil.copy2(source, pdf_folder / target)
    assert hashlib.sha256(source.read_bytes()).digest() == hashlib.sha256((pdf_folder / target).read_bytes()).digest()
print(json.dumps({'models': len(assets), 'web_image_bytes': sum(p.stat().st_size for p in destination.glob('*.webp')), 'pdfs': 2}))
