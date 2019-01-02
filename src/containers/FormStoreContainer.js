import { connect } from 'react-redux';

import FormWrapper from '../components/FormWrapper';

import { setFormData } from '../store/FormAction';
import { getFormData } from '../store/FormSelector';

const mapStateToProps = state => ({
  getFormData: key => getFormData(key, state),
});

const mapDispatchToProps = dispatch => ({
  setFormData: (key, payload) => dispatch(setFormData(key, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
