## 1. Purpose

Build a **motion-first study system for learning American Sign Language (ASL)** that prioritizes **short looping animations (2–3 seconds)** over static text.
The system must:

* support **embodied learning** (gesture, timing, facial grammar)
* avoid static-only formats (PDFs, audiobooks) as primary artifacts
* allow **multiple downstream presentations** (web app, Anki, PDFs, APIs)
* be **incrementally buildable** while learning ASL (no fluency prerequisite)

This project also serves as **ground-truth content infrastructure** for future gesture-based HCI research.

## 2. Core Design Principle

**Motion is the primary knowledge unit. Text is secondary metadata.**

ASL concepts are represented as **Cards**, each centered around short looping video clips.

## 3. Knowledge Atom: “Card”

Each Card represents **one semantic unit** (vocabulary, grammar marker, non-manual signal).
A Card contains:

* 1–3 short looping video clips (2–3 seconds each)
* minimal English gloss
* optional usage notes
* structured metadata (tags, difficulty, source)

Cards must be:

* filesystem-native
* human readable
* database-ready
* presentation-agnostic

## 4. Folder Structure (Source of Truth)

```
asl-motion-study/
├── 00_INBOX/
│   └── raw_captures/
│
├── 01_CARDS/
│   ├── vocab/
│   │   └── from/
│   │       ├── clip_01.mp4
│   │       ├── clip_02.mp4
│   │       ├── meta.json
│   │       └── notes.md
│   │
│   ├── grammar/
│   │   └── yes-no-questions-eyebrows/
│   │       ├── clip_01.mp4
│   │       ├── meta.json
│   │       └── notes.md
│
│   └── non_manual_markers/
│
├── 02_SOURCES/
│   └── <source_name>/
│       └── <date_topic>/
│           ├── raw.mp4
│           ├── transcript.txt
│           └── notes.md
│
├── 03_EXPORTS/
│   ├── web/
│   ├── anki/
│   └── pdf/
│
├── schemas/
│   └── card_meta.schema.json
│
└── README.md
```

## 5. Metadata Schema (v1)

Each Card includes a `meta.json`:

```json
{
  "id": "from",
  "type": "vocab",
  "gloss": "from",
  "difficulty": "beginner",
  "tags": [
    "handshape:flat",
    "location:neutral-space",
    "movement:outward",
    "nmm:none"
  ],
  "source": "ASL lesson <name>",
  "notes": "Directional sign; orientation matters."
}
```

This schema must remain stable as the project grows.

## 6. Workflow

### Capture

* Record short snippets into `00_INBOX/raw_captures/`
* No organization pressure at capture time

### Process

* Trim to 2–3 second loops
* Create Card folder
* Add `meta.json` + `notes.md`

### Use

* Review Cards locally
* Later render via web app / API

## 7. Non-Goals (Explicit)

* Full ASL transcription
* Grammar enforcement
* Curriculum completeness
* Performance optimization

This project prioritizes **clarity, motion fidelity, and future extensibility**.

## 8. Success Criteria

* Cards can be browsed and reviewed locally
* Motion conveys meaning without text
* Same Cards can later power: * a web app * spaced repetition * gesture-HCI experiments

# Recording & Format Decisions (Clear Answers)

## 1. Snagit vs OBS

### ✅ **Recommendation: Snagit (for now)**

**Why Snagit wins for this project:**

* fast capture → low friction
* region selection is perfect for isolating signer
* great for **learning + iteration**
* minimal setup overhead

OBS is better for:

* live demos
* streaming
* complex layouts

But OBS adds cognitive overhead you *don’t need* right now.
👉 **Use Snagit for capture. Standardize later.**

## 2. Resolution / Size / Aspect Ratio

### ✅ **Recommended Standard**

* **Aspect ratio:** `1:1` (square)
* **Resolution:** `512 × 512` or `640 × 640`
* **Framerate:** `30 fps`

**Why square?**

* ideal for looping
* works everywhere (web, mobile, Anki)
* crops out irrelevant background
* future-proof for XR / HCI overlays

**Why not 1080p?**

* unnecessary for hand + face clarity
* bloats file size
* slows iteration

## 3. GIF vs MP4

### ❌ GIF (do not use)

* huge file sizes
* no temporal compression
* bad for subtle motion (hands, eyebrows)

### ✅ **MP4 (H.264 / H.265)**

MP4 gives:

* excellent compression
* smooth looping
* universal support
* easy conversion later

👉 **Always record/export MP4.**

## 4. Best Compression Settings (High Quality, Small Size)

### Safe default (H.264)

```
Resolution: 512x512
Codec: H.264
CRF: 20–23
Preset: slow
FPS: 30
Audio: none
```

### Smaller files (optional later)

```
Codec: H.265 (HEVC)
CRF: 24–26
```

For 2–3 second clips, this yields:

* **50–150 KB per clip**
* no visible degradation for ASL motion

## Final Recommendation Summary

* ✅ **Snagit** for capture
* ✅ **Square video (512×512, 30fps)**
* ✅ **MP4 only**
* ✅ **H.264 CRF ~22**
* ✅ Folder-first, schema-driven system
* 🚫 No PDFs as primary artifacts
* 🚫 No premature database