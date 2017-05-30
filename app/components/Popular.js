var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Java', 'Ruby', 'Python', 'CSS'];

  return (
    <ul className='languages'>
      {
        languages.map((lang) => {
          return (
            <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.updateLanguage.bind(null, lang)}
            key={lang}>
              {lang}
            </li>
          )
        })
      }
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(()=>{
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
        selectedLanguage={this.state.selectedLanguage}
        updateLanguage={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;
