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
	<path d="M6 11L6 4L10.5 7.5L6 11Z" fill={color} />
</svg>
