<script lang="ts">
  export let text: string;
  export let activate: boolean;
</script>

{#if activate}
  <div
    class="fixed text-white text-center px-5 py-3 top-3 right-3 rounded-md bg-[#171929] text-wrap"
  >
    {text}
  </div>
{/if}
