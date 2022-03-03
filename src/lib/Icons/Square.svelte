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
		d="M1 1H1.5H13.5H14V1.5V13.5V14H13.5H1.5H1V13.5V1.5V1ZM2 2V13H13V2H2Z"
		fill={color}
	/>
</svg>
