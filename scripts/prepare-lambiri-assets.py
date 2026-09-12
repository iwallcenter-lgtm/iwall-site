"""Create web copies from the approved Model 1.png … Model 29.png files."""

import argparse
import json
from pathlib import Path

from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
destination = root / "public/images/lambiri"
destination.mkdir(parents=True, exist_ok=True)
models = []

for number in range(1, 30):
    source = args.source / f"Model {number}.png"
    with Image.open(source) as original:
        picture = original.convert("RGB")
        stem = f"model-{number:02d}"
        # Keep the complete image, including its model number and dimensions.
        picture.save(destination / f"{stem}.webp", quality=94, method=6)
        preview = picture.copy()
        preview.thumbnail((640, 800), Image.Resampling.LANCZOS)
        preview.save(destination / f"{stem}-preview.webp", quality=90, method=6)
        models.append({
            "id": number,
            "widthCm": 15 if 9 <= number <= 14 else 12,
            "lengthCm": 290 if number >= 28 else 280,
            "imageWidth": picture.width,
            "imageHeight": picture.height,
            "image": f"/images/lambiri/{stem}.webp",
            "preview": f"/images/lambiri/{stem}-preview.webp",
        })

(root / "src/lib/lambiri-models.json").write_text(
    json.dumps(models, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
print(f"Prepared {len(models)} models; original PNG files were not changed.")
