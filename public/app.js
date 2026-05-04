async function loadPipeline() {
  const container = document.getElementById('pipeline-runs');
  try {
    const response = await fetch('/api/pipeline');
    const data = await response.json();

    if (!data.workflow_runs || data.workflow_runs.length === 0) {
      container.innerHTML = '<p style="color:#8b949e">No pipeline runs found.</p>';
      return;
    }

    container.innerHTML = data.workflow_runs.map(run => {
      const status = run.conclusion || run.status;
      const statusClass = status === 'success' ? 'success'
        : status === 'failure' ? 'failure'
        : status === 'in_progress' ? 'in_progress'
        : 'other';

      const date = new Date(run.updated_at).toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });

      return `
        <div class="run">
          <div class="run-info">
            <span class="run-name">${run.display_title}</span>
            <span class="run-branch">Branch: ${run.head_branch}</span>
            <span class="run-time">${date}</span>
          </div>
          <span class="status ${statusClass}">${status.replace('_', ' ')}</span>
        </div>
      `;
    }).join('');

  } catch (err) {
    container.innerHTML = '<p style="color:#f85149">Failed to load pipeline data.</p>';
  }
}

loadPipeline();