import React, { Component } from 'react';
import "./Share.css"

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LineShareButton,
  LineIcon,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon
  
} from 'react-share';

export default class Share extends Component {
  render() {
    const shareUrl = 'https://vercel.com/shafatalitha/wedding-organizer-oemah-manten';
    return (
      <div style={{
        background: '#0000',
        height: '15vh',
        width: '100%',
        marginLeft:'22vh',
        marginBottom:'5vh',



      }}
       
      >
        <FacebookShareButton
          url={shareUrl}
          quote={'Wedding organizer Oemah Manten'}
          hashtag={'#Oemah Manten...'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Wedding organizer Oemah Manten'}
          hashtag={'#Oemah Manten...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <LineShareButton
          url={shareUrl}
          quote={'Wedding organizer Oemah Manten'}
          hashtag={'#Oemah Manten...'}
        >
          <LineIcon size={40} round={true} />
        </LineShareButton>

        <TwitterShareButton
          url={shareUrl}
          quote={'Wedding organizer Oemah Manten'}
          hashtag={'#Oemah Manten...'}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <TelegramShareButton
          url={shareUrl}
          quote={'Wedding organizer Oemah Manten'}
          hashtag={'#Oemah Manten...'}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    );
  }
}