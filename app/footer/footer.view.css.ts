namespace $.$$ {
	$mol_style_define($bog_bzrl_app_footer, {
		flex: {
			direction: 'column',
		},
		gap: '2rem',
		padding: '2rem',
		background: {
			color: $mol_theme.card,
		},

		Top: {
			display: 'flex',
			justify: {
				content: 'space-between',
			},
			align: {
				items: 'flex-start',
			},
			flex: {
				wrap: 'wrap',
			},
			gap: '2rem',
		},

		Contact: {
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.text,
		},

		Email: {
			font: {
				size: '1.25rem',
				weight: '500',
			},
		},

		Email_hint: {
			color: $mol_theme.shade,
			font: {
				size: '.75rem',
			},
		},

		Phone: {
			font: {
				size: '1.25rem',
				weight: '500',
			},
		},

		Phone_hint: {
			color: $mol_theme.shade,
			font: {
				size: '.75rem',
			},
		},

		Social: {
			display: 'flex',
			gap: $mol_gap.block,
		},

		Nav: {
			display: 'grid',
			grid: {
				templateColumns: 'repeat(3, 1fr)',
			},
			gap: '2rem',
		},

		Nav_main: {
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.block,
		},

		Nav_catalog: {
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.block,
		},

		Nav_docs: {
			flex: {
				direction: 'column',
			},
			gap: $mol_gap.block,
		},

		Bottom: {
			display: 'flex',
			justify: {
				content: 'space-between',
			},
			padding: {
				top: '1rem',
			},
			border: {
				top: {
					style: 'solid',
					width: '1px',
					color: $mol_theme.line,
				},
			},
			color: $mol_theme.shade,
			font: {
				size: '.75rem',
			},
		},
	})
}
