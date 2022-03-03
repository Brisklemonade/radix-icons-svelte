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
	<path d="M4 6H11L7.5 10.5L4 6Z" fill={color} />
</svg>
