import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Section from '../../components/containers/Section'
import Container from '../../components/containers/Container'
import {brandStyles, spacingUnit} from '../../paletteStyles'

const FormContent = styled.div`
  h1 {
    color: ${brandStyles.colorSecondary};;
    font-weight: 600;
    line-height: 1.125;
  }
  form input {
    margin: 0;
  }
  form {
    div:not(:last-child) {
      margin-bottom: ${spacingUnit._04};
      label {
        color: ${brandStyles.colorBodyFont};
        display: block;
        font-weight: 700;
        &:not(:last-child) {
          margin-bottom: ${spacingUnit._03};
        }
      }
      div {
        box-sizing: border-box;
        clear: both;
        position: relative;
        text-align: left;
      }
    }
  }

`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: ${spacingUnit._04};
  resize: vertical;
  box-shadow: ${brandStyles.boxShadowInset};
  width: 100%;
  max-height: 40em;
  min-height: 20em;
  border: ${brandStyles.borderBase};
  border-radius: ${brandStyles.borderRadius};
  color: ${brandStyles.colorFontSecondary};
`;

const Input = styled.input`
  box-shadow: ${brandStyles.boxShadowInset};
  max-width: 100%;
  width: 100%;
  border-radius: ${brandStyles.borderRadius};;
  color: ${brandStyles.colorFontSecondary};
  border: ${brandStyles.borderBase};
  align-items: center;
  display: inline-flex;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding: ${spacingUnit._04} ${spacingUnit._03};
  position: relative;
  vertical-align: top;
`;

const Button = styled.button`
  background-color: ${brandStyles.colorFontAccent};
  border-color: ${brandStyles.borderTransparent};
  color: ${brandStyles.colorFontSecondary};
  cursor: pointer;
  justify-content: center;
  padding: ${spacingUnit._05};
  text-align: center;
  white-space: nowrap;
  align-items: center;
  border-radius: ${brandStyles.borderRadius};
  display: inline-flex;
  height: 2.5em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Section>
          <Container>
            <FormContent>
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div>
                  <label htmlFor={'name'}>
                    Your name
                  </label>
                  <div>
                    <Input
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor={'email'}>
                    Email
                  </label>
                  <div>
                    <Input
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor={'message'}>
                    Message
                  </label>
                  <div>
                    <TextArea
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <Button type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </FormContent>
          </Container>
        </Section>
      </Layout>
    )
  }
}
