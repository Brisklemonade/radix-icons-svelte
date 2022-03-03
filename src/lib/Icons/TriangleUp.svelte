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
	<path d="M4 9H11L7.5 4.5L4 9Z" fill={color} />
</svg>
