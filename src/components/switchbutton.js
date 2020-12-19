import React from 'react'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffeb3b',
		},
		secondary: {
			main: '#d81b60',
		},
	},
})

export default function SwitchButton() {
	const [state, setState] = React.useState({
		switchA: true,
		switchB: true,
	})

	const handleChange = event => {
		setState({ ...state, [event.target.name]: event.target.checked })
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="grid grid-cols-1 gap-4">
				<div>
					<Button variant="outlined" color="primary">
						primary
					</Button>
				</div>
				<div>
					<Switch
						checked={state.switchA}
						onChange={handleChange}
						name="switchA"
						inputProps={{ 'aria-label': 'secondary checkbox' }}
					/>
					<Switch
						checked={state.switchB}
						onChange={handleChange}
						color="primary"
						name="switchB"
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					<Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
					<Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
					<Switch
						disabled
						checked
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					<Switch
						defaultChecked
						color="default"
						inputProps={{ 'aria-label': 'checkbox with default color' }}
					/>
				</div>
			</div>
		</ThemeProvider>
	)
}
