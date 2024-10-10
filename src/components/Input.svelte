<script lang="ts">
  export let id: 'phone' | string;
  export let label: string;
  export let value: string;
  export let required: boolean = false;
  export let error: string | undefined;
  function phoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value.startsWith('+')) {
      input.value = '+' + input.value.slice(1).replace(/[^0-9]/g, '');
    } else {
      input.value = input.value.replace(/[^0-9]/g, '');
    }
    value = input.value;
  }
</script>

<div class="w-full relative">
  <div
    class="border-b border-[rgb(63_67_99)] text-[#797EA3] focus-within:border-white focus-within:text-white transition-colors duration-300"
  >
    <label for={id} class="font-light text-[15px] flex items-center gap-2"
      >{label}
      {required ? '*' : ''}
      {#if error}
        <p class="text-red-500 text-[13px]">{error}</p>
      {/if}</label
    >
    <input
      {id}
      type="text"
      on:input={id === 'phone' ? phoneInput : null}
      bind:value
      class="w-full outline-none bg-inherit caret-white text-white"
    />
  </div>
</div>
