<script lang="ts">
    import CheckedIcon from '../lib/images/check-icon.svg';
	export let checked: boolean = false;
    export let error: string | undefined;
</script>

<div class="relative">
    <div class="flex items-center justify-center gap-2">
        <label for="agreement" class=" relative">
            <input type="checkbox" id="agreement" bind:checked class="w-[30px] h-[30px] outline-none appearance-none border-2 border-[#3F4363] hover:border-[#8F94B8CC] transition-colors duration-300 rounded-lg checked:bg-[#2C2F47] checked:border-none cursor-pointer text-[18px]">
            {#if checked}
                <span class="absolute p-2 left-0 top-0 w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
                    <img src={CheckedIcon} alt="Checked" class="w-[20px] h-[20px]" />
                </span>
            {/if}
        </label>
        <div class="font-light text-[15px] text-[#797EA3]">
            I accept 
            <a href="/" class="underline cursor-pointer">Terms and Privacy Policy</a>
        </div>
    </div>
    {#if error}
		<p class="text-red-500 text-[13px]">{error}</p>
        {:else}
        <div class="h-5"></div>
    {/if}
        
</div>
