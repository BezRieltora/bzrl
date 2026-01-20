namespace $.$$ {
	$mol_style_define($bog_bzrl_app_hero, {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: '2rem',
		align: {
			items: 'center',
		},
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
			maxWidth: '500px',
		},

		Icon: {
			display: 'none',
			width: '5rem',
			height: '5rem',
		},

		Media: {
			display: 'none',
		},

		Media_image: {
			width: '100%',
			height: 'auto',
			objectFit: 'contain',
		},

		Title: {
			font: {
				size: '2rem',
				weight: 600,
			},
			lineHeight: '1.2',
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
					gridTemplateColumns: '1.2fr 1fr',
					background: {
						color: '#F6D7A6',
					},
					Content: {
						maxWidth: '520px',
					},
					Media: {
						display: 'flex',
						justify: {
							content: 'flex-end',
						},
						align: {
							items: 'flex-end',
						},
					},
					Action: {
						background: {
							color: '#CDDC39',
						},
						border: {
							style: 'none',
						},
						color: '#1b1b1b',
						font: {
							weight: 600,
						},
					},
				},
				privacy: {
					background: {
						color: 'transparent',
					},
					color: '#1b1b1b',
					textAlign: 'center',
					Content: {
						maxWidth: '640px',
						margin: {
							left: 'auto',
							right: 'auto',
						},
						align: {
							items: 'center',
						},
					},
					Icon: {
						display: 'block',
						width: '6rem',
						height: '6rem',
					},
					Description: {
						color: '#3d4a5d',
					},
					Action: {
						display: 'none',
					},
				},
			},
		},
	})

	$mol_style_define($bog_bzrl_app_hero_team, {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '2rem',
		padding: '2rem',

		Photo: {
			width: '100%',
			height: '400px',
			objectFit: 'cover',
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
				weight: 600,
			},
		},

		Description: {
			color: $mol_theme.shade,
		},
	})
}
