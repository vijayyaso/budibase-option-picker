<script>
  export let options = ""
  export let value = ""
  export let onChange = () => {}
  
  $: optionsList = options.split(",").map(opt => ({
    id: opt.trim(),
    label: opt.trim()
  }))
</script>

<div class="bg-gray-900 p-6 rounded-lg">
  <h3 class="text-white text-lg mb-4">Item</h3>
  <div class="flex gap-3 flex-wrap">
    {#each optionsList as option}
      <button
        on:click={() => onChange(option.id)}
        class="px-6 py-2 rounded-full text-base transition-all duration-200 {
          value === option.id
            ? 'bg-green-900/30 text-green-400 border-2 border-green-500/50 shadow-lg shadow-green-500/20'
            : 'bg-gray-800/50 text-gray-300 border-2 border-gray-700 hover:border-gray-600'
        }"
      >
        {option.label}
      </button>
    {/each}
  </div>
</div>
