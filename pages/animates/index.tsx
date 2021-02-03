import * as React from 'react'
import { Card, Row, Col } from 'antd';

import Layout from '@/layouts/Layout'
import animates from '@/pages/animates/config'

const { Meta } = Card;

export default function Animates(props: Props): React.FunctionComponent {
  const renderCard = (animate) => {
    return (
      <Col 
        span={4} 
        key={animate.title}
      >
        <Card
          hoverable
          style={{ width: 150 }}
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
      </Col>
    )
  }

  return (
    <Row>
      {animates.map(a => renderCard(a)) }
    </Row>
  )
}

Animates.Layout = Layout