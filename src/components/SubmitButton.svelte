<script lang="ts">
	export let type: 'submit' | 'reset' | 'button' = "submit";
</script>

<button type={type} class="py-[10px] px-[40px] bg-[#2C2F47] text-[#FFFFFFB3] rounded-[50px] text-lg leading-[120%] hover:bg-[#404463] transition-colors duration-300 active:bg-[#2C2F47]">
    Send
</button>