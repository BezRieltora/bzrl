namespace $.$$ {
	$mol_style_define($bog_bzrl_app_slider, {
		position: 'relative',
		overflow: 'hidden',
		border: {
			radius: $mol_gap.round,
		},

		Slides: {
			width: '100%',
		},

		Slide: {
			width: '100%',
			height: '320px',
			objectFit: 'cover',
		},

		Prev: {
			position: 'absolute',
			left: $mol_gap.block,
			top: '50%',
			transform: 'translateY(-50%)',
			background: {
				color: '#fff',
			},
			border: {
				radius: '50%',
				style: 'solid',
				width: '1px',
				color: '#e4edf9',
			},
			width: '3rem',
			height: '3rem',
			color: '#3b4a5a',
			boxShadow: '0 6px 16px rgba(30, 60, 114, 0.12)',
			zIndex: 2,
		},

		Next: {
			position: 'absolute',
			right: $mol_gap.block,
			top: '50%',
			transform: 'translateY(-50%)',
			background: {
				color: '#fff',
			},
			border: {
				radius: '50%',
				style: 'solid',
				width: '1px',
				color: '#e4edf9',
			},
			width: '3rem',
			height: '3rem',
			color: '#3b4a5a',
			boxShadow: '0 6px 16px rgba(30, 60, 114, 0.12)',
			zIndex: 2,
		},

		Dots: {
			position: 'absolute',
			bottom: $mol_gap.block,
			left: '50%',
			transform: 'translateX(-50%)',
			display: 'flex',
			gap: $mol_gap.text,
			zIndex: 2,
		},

		Dot: {
			width: '.625rem',
			height: '.625rem',
			padding: 0,
			border: {
				radius: '50%',
			},
			background: {
				color: '#c9ddff',
			},
			cursor: 'pointer',
		},

		'@': {
			bog_bzrl_app_slider_dot_active: {
				true: {
					Dot: {
						background: {
							color: '#6ca3f4',
						},
					},
				},
			},
		},
	})
}
