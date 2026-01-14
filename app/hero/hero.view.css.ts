namespace $.$$ {
	$mol_style_define($bog_bzrl_app_hero, {
		padding: '3rem',
		border: {
			radius: $mol_gap.round,
		},
		background: {
			color: $mol_theme.card,
		},

		Content: {
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.block,
			max: {
				width: '500px',
			},
		},

		Title: {
			font: {
				size: '2rem',
				weight: '600',
			},
			line: {
				height: '1.2',
			},
		},

		Description: {
			color: $mol_theme.shade,
		},

		Action: {
			align: {
				self: 'flex-start',
			},
			border: {
				style: 'solid',
				width: '1px',
				color: $mol_theme.line,
				radius: '2rem',
			},
			padding: [$mol_gap.block, '1.5rem'],
		},

		'@': {
			bog_bzrl_app_hero_variant: {
				promo: {
					background: {
						image: 'url(/bog/bzrl/app/hero/promo-bg.jpg)',
						size: 'cover',
						position: 'center',
					},
				},
				privacy: {
					background: {
						color: '#1a1a2e',
					},
					color: '#fff',
					text: {
						align: 'center',
					},
					Content: {
						max: {
							width: '600px',
						},
						margin: 'auto',
					},
				},
			},
		},
	})

	$mol_style_define($bog_bzrl_app_hero_team, {
		display: 'grid',
		grid: {
			templateColumns: '1fr 1fr',
		},
		gap: '2rem',
		padding: '2rem',

		Photo: {
			width: '100%',
			height: '400px',
			object: {
				fit: 'cover',
			},
			border: {
				radius: $mol_gap.round,
			},
		},

		Content: {
			flex: {
				direction: 'column',
			},
			justify: {
				content: 'center',
			},
			gap: $mol_gap.block,
		},

		Title: {
			font: {
				size: '2rem',
				weight: '600',
			},
		},

		Description: {
			color: $mol_theme.shade,
		},
	})
}
