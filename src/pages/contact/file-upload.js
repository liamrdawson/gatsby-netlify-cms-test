import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import {brandStyles, spacingUnit} from '../../paletteStyles'

import styled from 'styled-components'
import Section from '../../components/containers/Section'
import Container from '../../components/containers/Container'

const FormContent = styled.div`
  h1 {
    color: ${brandStyles.colorFontAccent};
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
        color: ${brandStyles.colorFontAccent};
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

const Control = styled.input`
  box-shadow: ${brandStyles.boxShadowInset};
  color: ${brandStyles.colorFontAccent};
  border: ${brandStyles.borderBase};
  border-radius: ${brandStyles.borderRadius};
  max-width: 100%;
  width: 100%;
  align-items: center;
  display: inline-flex;
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

const File = styled.div`
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
  label {
    align-items: stretch;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
    input {
      height: 100%;
      left: 0;
      opacity: 0;
      outline: none;
      position: absolute;
      top: 0;
      width: 100%;
    }
    span {
      border: ${brandStyles.borderBase};
      border-radius: ${brandStyles.borderRadius};
      padding-left: 1em;
      padding-right: 1em;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  border: ${brandStyles.borderBase};
  border-radius: ${brandStyles.borderRadius};
  color: ${brandStyles.colorFontAccent};
  border-radius: ${brandStyles.borderRadius};
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
`;

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
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
              <h1>File Upload</h1>
              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
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
                    <Control
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <File>
                    <label>
                      <input
                        type="file"
                        name="attachment"
                        onChange={this.handleAttachment}
                      />
                      <span>
                        <File>Choose a file…</File>
                      </span>
                    </label>
                  </File>
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
