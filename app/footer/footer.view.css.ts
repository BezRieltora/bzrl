namespace $.$$ {
	$mol_style_define($bog_bzrl_app_footer, {
		flex: {
			direction: 'column',
		},
		gap: '2rem',
		padding: '2rem',
		background: {
			color: '#4c4c4c',
		},
		color: '#fff',

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
				weight: 500,
			},
			color: '#fff',
		},

		Email_hint: {
			color: '#ffffffb3',
			font: {
				size: '.75rem',
			},
		},

		Phone: {
			font: {
				size: '1.25rem',
				weight: 500,
			},
			color: '#fff',
		},

		Phone_hint: {
			color: '#ffffffb3',
			font: {
				size: '.75rem',
			},
		},

		Social: {
			display: 'flex',
			gap: $mol_gap.block,
			align: {
				items: 'center',
			},
		},

		Ig_icon: {
			width: '42px',
			height: '42px',
		},

		Vk_icon: {
			width: '42px',
			height: '42px',
		},

		Tg_icon: {
			width: '42px',
			height: '42px',
		},

		Nav: {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: '2rem',
			color: '#fff',
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
					color: '#ffffff26',
				},
			},
			color: '#ffffffb3',
			font: {
				size: '.75rem',
			},
		},
	})
}
