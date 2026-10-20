# orion-results product demo

Recorded local output from v0.1.0. Synthetic data, edited replay; no external provider calls.

### SHOT capture
- target: terminal
- url: index.html?scene=capture
- narration: Orion Results captures complete text in an explicitly selected private local session. This released example stores synthetic text and verifies exact read back by reference.
- action: goto url="index.html?scene=capture"
- action: wait ms=400

### SHOT snapshot
- target: terminal
- url: index.html?scene=snapshot
- narration: The selected snapshot is one hundred seventy one bytes, under the example budget. One result is omitted from this view and remains recoverable. This limit measures the snapshot string, not a whole model context.
- action: goto url="index.html?scene=snapshot"
- action: wait ms=400

### SHOT recover
- target: terminal
- url: index.html?scene=recover
- narration: The same example verifies backup recovery, quota refusal, and cleanup of its own scratch data. References identify results; they do not grant access or encrypt them. Follow the source and guide for the supported local setup.
- action: goto url="index.html?scene=recover"
- action: wait ms=400
