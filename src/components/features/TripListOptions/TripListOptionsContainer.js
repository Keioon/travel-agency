import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addingTag, removingTag, changeDurationTimeTo, changeDurationTimeFrom/*,changeDisplayOrder */} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addingTag: tags => dispatch(addingTag(tags)),
  removingTag: tags => dispatch(removingTag(tags)),
  changeDurationTimeTo: duration => dispatch(changeDurationTimeTo(duration)),
  changeDurationTimeFrom: duration => dispatch(changeDurationTimeFrom(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
