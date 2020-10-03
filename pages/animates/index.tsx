import * as React from 'react'
import { Card } from 'antd';

import Layout from '@/layouts/Layout'
import animates from '@/pages/animates/config'
console.log(animates, 'animate')
const { Meta } = Card;

export default function Animates(props: Props): React.FunctionComponent {
  return animates.map(animate => {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img 
            src={animate.src}
          />
        }
      >
        <Meta 
          title={animate.title}
          description={animate.description}
        />
      </Card>
    )
  })
}

Animates.Layout = Layout