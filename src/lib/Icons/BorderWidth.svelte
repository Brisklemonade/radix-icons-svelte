<script>
	export let color = 'currentColor';
	export let size = 15;
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 15 15"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M1 3H14V4H1V3ZM1 6H14V8H1V6ZM14 10.25H1V12.75H14V10.25Z"
		fill={color}
	/>
</svg>
