namespace $.$$ {
	$mol_style_define($bog_bzrl_app, {
		max: {
			width: '1200px',
		},
		margin: 'auto',

		Head: {
			justify: {
				content: 'space-between',
			},
			align: {
				items: 'center',
			},
			gap: '2rem',
		},

		Logo: {
			font: {
				size: '1.5rem',
				weight: '700',
			},
		},

		Tabs: {
			background: {
				color: '#f5f5f5',
			},
			border: {
				radius: '2rem',
			},
			padding: $mol_gap.text,
		},

		Body: {
			flex: {
				direction: 'column',
			},
			gap: '3rem',
			padding: '2rem',
		},

		Title_section: {
			font: {
				size: '2rem',
				weight: '600',
			},
			text: {
				align: 'center',
			},
		},

		Apartments: {
			display: 'grid',
			grid: {
				templateColumns: 'repeat(3, 1fr)',
			},
			gap: '1.5rem',
		},

		How_it_works: {
			flex: {
				direction: 'column',
			},
			gap: '2rem',
		},

		How_title: {
			font: {
				size: '1.75rem',
				weight: '600',
			},
		},

		Steps: {
			display: 'grid',
			grid: {
				templateColumns: 'repeat(3, 1fr)',
			},
			gap: '1.5rem',
		},

		Privacy: {
			position: 'relative',
			border: {
				radius: $mol_gap.round,
			},
			overflow: 'hidden',
		},

		Privacy_content: {
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			padding: '2rem',
			background: {
				image: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
			},
		},

		Benefits: {
			flex: {
				direction: 'column',
			},
			gap: '2rem',
		},

		Benefits_title: {
			font: {
				size: '1.75rem',
				weight: '600',
			},
		},

		Benefits_list: {
			display: 'grid',
			grid: {
				templateColumns: 'repeat(3, 1fr)',
			},
			gap: '1.5rem',
		},

		'@media': {
			'screen and (max-width: 900px)': {
				Apartments: {
					grid: {
						templateColumns: 'repeat(2, 1fr)',
					},
				},
				Steps: {
					grid: {
						templateColumns: '1fr',
					},
				},
				Benefits_list: {
					grid: {
						templateColumns: '1fr',
					},
				},
			},
			'screen and (max-width: 600px)': {
				Apartments: {
					grid: {
						templateColumns: '1fr',
					},
				},
			},
		},
	})
}
