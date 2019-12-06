import React from 'react'
import { Spin, Icon } from 'antd'

import Logo from './Logo'
import AlignCenter from './AlignCenter'

function Loading({ logo, spin }) {
	return (
		<AlignCenter style={{marginTop: "20vh", color: "#d92f10"}}>
			<div style={{margin: "auto"}}>
				{
					logo &&
          <Logo style={{fontSize: 40}}/>
				}
				{
					spin &&
					<Spin
						style={{marginTop: 48}}
						indicator={<Icon style={{fontSize:80}} type="loading" spin />}
					/>
				}
			</div>
		</AlignCenter>
	)
}

export default Loading
