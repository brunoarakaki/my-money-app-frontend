import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={LabelAndInput}
            label='Nome' cols='12 4' placeholder='Informe o nome' />
          <Field name='month' component={LabelAndInput} type='number'
            label='Mês' cols='12 4' placeholder='Informe o mês' />
          <Field name='year' component={LabelAndInput} type='number'
            label='Ano' cols='12 4' placeholder='Informe o ano' />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

const reduxFormDecorator =  reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})
const mapDispatchToProps = dispatch => (bindActionCreators({init}, dispatch))
const reduxDecorator = connect(null, mapDispatchToProps)
export default reduxDecorator(reduxFormDecorator(BillingCycleForm))
