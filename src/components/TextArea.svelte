<script lang="ts">
  export let id: string;
  export let label: string;
  export let value: string;
  export let required: boolean = false;
  export let error: string | undefined;
</script>

<div class="w-full relative">
  <div
    class="border-b border-[rgb(63_67_99)] text-[#797EA3] focus-within:border-white focus-within:text-white transition-colors duration-300"
  >
    <label for={id} class="font-light text-[15px] flex gap-2"
      >{label}
      {required ? '*' : ''}
      {#if error}
        <p class="text-red-500 text-[13px]">{error}</p>
      {/if}
    </label>
    <textarea
      {id}
      bind:value
      class="w-full outline-none bg-inherit caret-white text-white max-h-14 min-h-14"
    />
  </div>
</div>
