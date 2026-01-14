namespace $.$$ {
	$mol_style_define($bog_bzrl_app_card, {
		flex: {
			direction: 'column',
		},
		position: 'relative',
		border: {
			radius: $mol_gap.round,
		},
		overflow: 'hidden',
		background: {
			color: $mol_theme.card,
		},

		Badge: {
			position: 'absolute',
			top: $mol_gap.block,
			left: $mol_gap.block,
			padding: [$mol_gap.text, $mol_gap.block],
			border: {
				radius: $mol_gap.round,
			},
			font: {
				size: '.75rem',
				weight: '500',
			},
			zIndex: 1,
		},

		Photo: {
			width: '100%',
			height: '180px',
			object: {
				fit: 'cover',
			},
		},

		Info: {
			padding: $mol_gap.block,
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.text,
		},

		Details: {
			color: $mol_theme.shade,
			font: {
				size: '.875rem',
			},
		},

		Price: {
			font: {
				weight: '600',
			},
		},

		'@': {
			bog_bzrl_app_card_district: {
				vahitovsky: {
					Badge: {
						background: {
							color: '#E8F5E9',
						},
						color: '#2E7D32',
					},
				},
				sovetsky: {
					Badge: {
						background: {
							color: '#E3F2FD',
						},
						color: '#1565C0',
					},
				},
				novo_savinovsky: {
					Badge: {
						background: {
							color: '#FFF3E0',
						},
						color: '#EF6C00',
					},
				},
			},
		},
	})
}
