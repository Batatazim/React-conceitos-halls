import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {
  
    const params = useParams()
    const [filme, setFilme] = useState({})

    useEffect(()=>{

       apiFilmes.get('movie/'+ params.id + '?language=pt-BR').then(resultado=>{
           setFilme(resultado.data)
          
       })
       
    },[])

    return (
    <div>
        <Container>
        <h1>{filme.title}</h1>
        <Row>
        <Col md={4}>
        <Card style={{ width: '20rem' }}>
         <Card.Img variant="top"src={'https://image.tmdb.org/t/p/w500/'+ filme.poster_path}/>
       </Card>
       </Col>
        <Col md={8}>
        <p>{filme.original_title}</p>
        </Col>
        </Row>
        
        </Container>
    </div>
  )
}

export default FilmesDetalhes