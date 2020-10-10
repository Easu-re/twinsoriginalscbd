import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet"></link>
            <script src="https://secure.networkmerchants.com/token/CollectCheckout.js" data-checkout-key="checkout_public_4p585kp6VP62B6c9Qh9P989bx367rdB6"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </html>
    )
  }
}