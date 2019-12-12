import React from 'react';
import { ReactComponent as Logo } from './media/brandTrudigiLong.svg'
import qaList from './media/qaList';

function Header(props) {
	return <header className="App-header">
			<div>
				<Logo className="App-logo" />
				<h1>Trunojoyo Digital Freelancer</h1>
				<p>Kami menerima pesanan project digital dari harga ekonomis hingga skala besar</p>
				<p><small><i>Scroll ke bawah untuk melihat jenis pesanan...</i></small></p>
			</div>
			<div className="App-qa">
				<h3>FAQ</h3>
				{
					qaList.map(x => <div className="App-qa-item" key={x.q}>
						<div className="App-qa-q">{x.q}</div>
						<div className="App-qa-a">{x.a}</div>
					</div>)
				}
				</div>
		</header>
}

export default Header