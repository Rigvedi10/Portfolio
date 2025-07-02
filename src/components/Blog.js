import React from 'react';

export default function Blog() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🏗️ Generating Floorplans with AI: My Journey from GPT to Diffusion Models</h1>

      <h2>✨ Introduction</h2>
      <p>
        Over the past few weeks, I’ve been exploring different approaches to automatically generate 2D architectural floorplans using AI. The goal was simple: produce raw, top-down schematic floorplans (think black-and-white blueprints) from structured input data like room size and furniture dimensions.
      </p>
      <p>
        But as I learned, the path from data to design isn’t as straightforward as it sounds. Here’s a breakdown of what worked, what didn’t, and why diffusion models ended up being the most promising tool in the pipeline.
      </p>

      <h2>🧠 Step 1: Prompt Engineering with GPT-Image-1</h2>
      <p>
        I started by parsing structured furniture data from a CSV file using Python and Pandas. From this, I used GPT-Image-1, a multimodal text-to-text model, to generate prompts describing the floorplan requirements.
      </p>
      <p>For example, from a few CSV lines like:</p>
      <pre style={{ background: '#f4f4f4', padding: '1rem', overflowX: 'auto' }}>
{`Room: King Standard, Size: 14x16 ft
Bed: 6x6.5 ft
Chair: 2x2 ft (x2)
Table: 4x2 ft`}
      </pre>
      <p>GPT-Image-1 generated the following prompt:</p>
      <blockquote style={{ borderLeft: '4px solid #ccc', paddingLeft: '1rem' }}>
        “Create a 2D top-down architectural blueprint of a King Standard Room. Room size: 14x16 ft. Use only black lines on a white background. Add: 1 bed (6x6.5 ft), 2 chairs (2x2 ft), 1 table (4x2 ft). No colors or textures. Raw schematic only.”
      </blockquote>
      <p>
        This prompt was designed to instruct an image generation model to draw only the structure, not decorative or styled visuals.
      </p>

      <h2>🎨 Step 2: Testing DALL·E and GPT-4o for Visual Output</h2>
      <p>
        Next, I used DALL·E (via OpenAI’s image API) to visualize the prompt.
      </p>
      <p>
        To enhance the quality of the prompt further, I also tested GPT-4o, OpenAI’s latest multimodal model. GPT-4o did a good job refining the prompt’s tone and structure.
      </p>
      <p>
        But here’s where things broke down…
      </p>
      <p>
        While the prompt clearly requested a raw, 2D architectural drawing, the output from DALL·E was decorative. Instead of blueprints, it gave me fully furnished room renders – photorealistic, yes, but not usable for architectural layout work.
      </p>
      <p>
        Despite even strict wording like “blueprint schematic” or “no color,” DALL·E still leaned toward creative interpretations.
      </p>

      <h2>🌀 Step 3: Trying Diffusion Models</h2>
      <p>
        Knowing that text-to-image models like DALL·E are trained for creativity, not architectural constraints, I turned to diffusion models, which allow greater control and customization.
      </p>
      <p>
        I used a Colab-based Stable Diffusion implementation:
        <br />👉 Here’s the notebook I used
      </p>
      <p><strong>Results:</strong></p>
      <ul>
        <li>Free version (no ControlNet): outputs were inconsistent, with noisy layouts or incorrect object positioning.</li>
        <li>Lacked fine-grain control over object arrangement and style.</li>
        <li>No pre-trained architectural schema support.</li>
      </ul>
      <p>
        Still, this approach felt closer to the goal than DALL·E. With the right model fine-tuning or ControlNet overlay, I could define exact object placements and blueprint constraints.
      </p>

      <h2>🔍 Conclusion: What’s the Best Way?</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Tool/Model</th>
            <th>Purpose</th>
            <th>Output Type</th>
            <th>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GPT-Image-1</td>
            <td>Generate prompt from CSV</td>
            <td>Text</td>
            <td>✅ Great for automation</td>
          </tr>
          <tr>
            <td>GPT-4o</td>
            <td>Enhance prompt phrasing</td>
            <td>Text</td>
            <td>✅ Helpful, but not enough</td>
          </tr>
          <tr>
            <td>DALL·E</td>
            <td>Generate visual floorplan</td>
            <td>Artistic/Decorative Image</td>
            <td>❌ Not suited for blueprints</td>
          </tr>
          <tr>
            <td>Stable Diffusion</td>
            <td>Raw blueprint generation</td>
            <td>Sketch-style layout</td>
            <td>⚠️ Promising but needs tuning</td>
          </tr>
        </tbody>
      </table>

      <h2>🚀 Next Steps</h2>
      <ul>
        <li>Use ControlNet with Stable Diffusion for guided generation (bounding boxes, edge maps).</li>
        <li>Try Replicate or Hugging Face Diffusers + Inference API with domain-specific finetuning.</li>
        <li>Build a pipeline from CSV ➝ Prompt ➝ Blueprint via diffusion model API.</li>
      </ul>

      <h2>💡 Final Thoughts</h2>
      <p>
        AI floorplan generation is an exciting intersection of NLP, computer vision, and design automation. While we're still bridging the gap between data and architectural logic, diffusion models offer the strongest foundation for controllable, schematic output.
      </p>
      <p>
        If you're exploring this space or have suggestions on improving the process, feel free to connect!
      </p>
    </div>
  );
}
