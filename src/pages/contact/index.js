import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Section from '../../components/containers/Section'
import Container from '../../components/containers/Container'

const FormContent = styled.div`
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
    color: #363636;
    font-weight: 600;
    line-height: 1.125;
  }
  form input {
    margin: 0;
  }
  form {
    div:not(:last-child) {
      margin-bottom: 0.75rem;
      label {
        color: #363636;
        display: block;
        font-size: 1rem;
        font-weight: 700;
        &:not(:last-child) {
          margin-bottom: 0.5em;
        }
      }
      div {
        box-sizing: border-box;
        clear: both;
        font-size: 1rem;
        position: relative;
        text-align: left;
      }
    }
  }

`;

const TextArea = styled.textarea`
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  width: 100%;
  max-height: 40em;
  min-height: 20em;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
`;

const Input = styled.input`
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
`;

const Button = styled.button`
  background-color: #3273dc;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  border-width: 1px;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
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
