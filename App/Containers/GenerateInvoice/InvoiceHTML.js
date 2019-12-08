import moment from 'moment'

const generateHTML = (props) => {
	const {
		invoiceStatus,
		amountPaid,
		amountDue,
		items,
		taxPercent,
		tax,
		total,
		subTotal,
		discounts,
		dueDate,
		issueDate,
		customer,
		user,
	} = props
return `
	<html>
		<head>
			<style>
			@font-face { font-family: 'PalanquinDark-Regular'; font-style: normal; font-weight: 400; src: url('PalanquinDark-Regular.ttf'); }
			</style>
		</head>
		<body style="margin:30;">


				<div style="align-items:flex-start;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between;">
					<h4 style="font-family:PalanquinDark-Regular">${invoiceStatus === 'Select Status' ? '': invoiceStatus }</h4> 
					<h1 style="font-family:PalanquinDark-Regular">INVOICE</h1>
				</div>



				<div style="margin-top:30px;align-items:flex-start;display:flex;flex-direction:row;justify-content:space-between;">

					<div>
						<p style="line-height:50%;font-size:12px;font-family:Roboto-Medium">${user.first_name || ''} ${user.last_name || ''}</p>
						<p style="line-height:50%;font-size:12px;font-family:Roboto-Medium">${user.address}</p>
						<p style="line-height:50%;font-size:12px;font-family:Roboto-Medium">${user.city}, ${user.state}</p>
						<p style="line-height:50%;font-size:12px;font-family:Roboto-Medium">${user.phone}</p>
						<p style="line-height:50%;font-size:12px;font-family:Roboto-Medium">${user.email}</p>
					</div>
					<div>
						<p style="line-height:50%;font-size:14px;font-family:Roboto-Medium">Issue Date</p>
						<p style="line-height:50%;font-size:12px;font-family:Roboto-Medium">${moment.parseZone(issueDate).format('ll')}</p>
						<p style="line-height:50%;font-size:14px;font-family:Roboto-Medium">Due Date</p>
						<p style="line-height:50%;font-size:12px;font-family:Roboto-Medium">${moment.parseZone(dueDate).format('ll') || ' '}</p>
					</div>
				</div>


				<div>
				<p style="line-height:50%;font-size:16px;font-family:Roboto-Medium">Billed To:</p>
				<p style="line-height:60%;font-size:12px;font-family:Roboto-Medium">${customer.name}</p>
				<p style="line-height:60%;font-size:12px;font-family:Roboto-Medium">${customer.email}</p>
			</div>

				<table style="border-collapse:collapse; width:100%; margin-top:20px;">
					<tr style="border-bottom:1px solid #f2f2f2;">
						<th style="padding-top:8px;padding-bottom:8px;text-align:left;color:rgb(121, 121, 121 );font-size:12px;font-family:Roboto-Medium;">Item</th>
						<th style="padding-top:8px;padding-bottom:8px;text-align:right;color:rgb(121, 121, 121 );font-size:12px;font-family:Roboto-Medium;">Qty</th>
						<th style="padding-top:8px;padding-bottom:8px;text-align:right;color:rgb(121, 121, 121 );font-size:12px;font-family:Roboto-Medium;">Unit Price</th>
						<th style="padding-top:8px;padding-bottom:8px;text-align:right;color:rgb(121, 121, 121 );font-size:12px;font-family:Roboto-Medium;">Discount</th>
						<th style="padding-top:8px;padding-bottom:8px;text-align:right;color:rgb(121, 121, 121 );font-size:12px;font-family:Roboto-Medium;">Subamount</th>
					</tr>
						${generateItemsList(Object.values(items))}
				</table>
						


				<div style="display:flex;width:100%;flex-direction:column;align-items:flex-end;padding-right:40px;margin-top:30px;">
					<div style="display:flex;flex-direction:column;width:200px;">
						<div style="display:flex;felx-direction:row;justify-content:space-between;margin-bottom:10px;line-height:.8em;">
							<span style="display:flex;font-size:15px;align-items:center;font-family:Roboto-Medium;">Subtotal</span>
							<span style="font-size:14px;font-family:Roboto-Medium;">$${subTotal.toFixed(2)}</span>
						</div>

						<div style="display:flex;felx-direction:row;justify-content:space-between;margin-bottom:10px;line-height:.8em;">
							<span style="display:flex;font-size:15px;align-items:center;font-family:Roboto-Medium;">Tax(%${taxPercent})</span>
							<span style="font-size:14px;font-family:Roboto-Medium;">$${tax.toFixed(2)}</span>
						</div>

							<div style="display:flex;felx-direction:row;justify-content:space-between;margin-bottom:10px;line-height:.8em;">
								<span style="display:flex;font-size:15px;align-items:center;font-family:Roboto-Medium;">Discounts</span>
								<span style="font-size:14px;font-family:Roboto-Medium;">$${discounts.toFixed(2)}</span>
							</div>

							<div style="display:flex;felx-direction:row;justify-content:space-between;margin-bottom:10px;line-height:.8em;">
								<span style="display:flex;font-size:15px;align-items:center;font-family:Roboto-Medium;">Total</span>
								<span style="font-size:14px;font-family:Roboto-Medium;">$${(total - +discounts).toFixed(2)}</span>
							</div>

							<div style="display:flex;felx-direction:row;justify-content:space-between;margin-bottom:10px;line-height:.8em;">
								<span style="display:flex;font-size:15px;align-items:center;font-family:Roboto-Medium;">Amount Paid</span>
								<span style="font-size:14px;font-family:Roboto-Medium;">$${amountPaid.toFixed(2)}</span>
							</div>

							<div style="display:flex;felx-direction:row;justify-content:space-between;margin-bottom:10px;line-height:.8em;font-family:Roboto-Medium;">
								<span style="display:flex;font-size:15px;align-items:center;font-family:Roboto-Medium;">Amount Due</span>
								<span style="font-size:14px;font-family:Roboto-Medium;">$${amountDue.toFixed(2)}</span>
							</div>
					</div>
			</div>
		</body>
	</html>` 
}

export default generateHTML




const generateItemsList = (itemsValues) => {
	let output = ''
	itemsValues.map(item => {
		output += `<tr style="border-bottom:1px solid #f2f2f2;font-family:Roboto-Medium;">
                <td style="color:#242423;font-size:12px;font-family:Roboto-Medium;"><div>${item.name}</div><span style="font-size:8px">${item.description}</span></td>
                <td style="color:#242423;font-size:12px;font-family:Roboto-Medium;text-align:right;">${item.quantity}</td>
								<td style="color:#242423;font-size:12px;font-family:Roboto-Medium;text-align:right;">${item.price}</td>
								<td style="color:#242423;font-size:12px;font-family:Roboto-Medium;text-align:right;">${item.discount}</td>
                <td style="color:#242423;font-size:12px;font-family:Roboto-Medium;text-align:right;">$ ${(item.quantity.length > 0 ? +item.price * +item.quantity: +item.price).toFixed(2)}</td>
            </tr>`
	})
	return output
}