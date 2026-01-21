namespace $.$$ {
	$mol_style_define($bog_bzrl_app_step, {
		flex: {
			direction: 'column',
		},
		align: {
			items: 'center',
		},
		textAlign: 'center',
		padding: '2rem',
		background: {
			color: $mol_theme.card,
		},
		border: {
			radius: $mol_gap.round,
		},
		gap: $mol_gap.block,
		position: 'relative',

		Number: {
			position: 'absolute',
			top: $mol_gap.block,
			right: $mol_gap.block,
			width: '2rem',
			height: '2rem',
			border: {
				radius: '50%',
			},
			background: {
				color: $mol_theme.control,
			},
			display: 'flex',
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
			font: {
				size: '.875rem',
				weight: 600,
			},
		},

		Icon: {
			width: '4rem',
			height: '4rem',
			background: {
				color: '#f5f5f5',
			},
			border: {
				radius: '50%',
			},
			display: 'flex',
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
		},

		Title: {
			font: {
				size: '1.125rem',
				weight: 600,
			},
		},

		Description: {
			color: $mol_theme.shade,
			font: {
				size: '.875rem',
			},
		},
	})
}
