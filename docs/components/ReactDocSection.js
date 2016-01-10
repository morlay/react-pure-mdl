import './ReactDocSection.scss';

import React, { PropTypes } from 'react';
import _ from 'lodash';

import Grid, { Cell } from 'src/layout/Grid';
import Typography from 'src/typography/Typography';
import DataTable from 'src/tables/DataTable';

import ReactPlayground from './ReactPlayground';

function html(string) {
  return string ? {
    dangerouslySetInnerHTML: {
      __html: string
    }
  } : {};
}

class ReactDocSection extends React.Component {

  static propTypes = {
    componentItem: PropTypes.object.isRequired,
    previewConfig: PropTypes.object
  };

  processType(typeObject) {
    if (_.isObject(typeObject)) {
      switch (typeObject.name) {
        case 'shape':
          return 'custom shape';
        case 'enum':
        case 'union':
          return _(typeObject.value)
            .map((obj) => {
              return this.processType(obj);
            })
            .join(' | ');
        case 'instanceOf':
          return `${typeObject.name} ${typeObject.value}`;

        default:
          return typeObject.name ? `${typeObject.name}` : `${typeObject.value}`;
      }
    }
  }

  renderProps(componentProps) {
    const columns = [
      { name: 'propKey', label: 'Prop' },
      { name: 'type', label: 'Type' },
      { name: 'desc', label: 'Description' },
      { name: 'required', label: 'Required' }
    ];

    const data = _(componentProps)
      .keys()
      .map((propKey) => {
        const propItem = componentProps[propKey];
        return {
          propKey: (
            <Typography font='bold'>
              {propKey}
            </Typography>
          ),
          desc: (<p {...html(propItem.description)} />),
          type: this.processType(propItem.type),
          required: (propItem.required ? <span> * </span> : null)
        };
      })
      .value();

    return (
      <DataTable
        columns={columns}
        data={data}
      />
    );
  }

  renderExamples(examples = []) {
    return _.map(examples, (exampleItem, idx) => {
      return (
        <ReactPlayground
          key={idx}
          previewConfig={this.props.previewConfig}
          codeText={exampleItem.contents}
        />
      );
    });
  }

  render() {
    const props = this.props;
    return (
      <Grid className='ReactDocSection'>
        <Cell col={12}>
          <Typography
            type='display'
            level={2}
          >
            <h3>
              {props.componentItem.name}
            </h3>
          </Typography>
          <Typography
            type='body'
            level={1}
          >
            <span {...html(props.componentItem.description)} />
          </Typography>
          <Typography type='body'>
            <div>
              {this.renderExamples(props.componentItem.examples)}
            </div>
          </Typography>
          <Typography type='title'>
            Props
          </Typography>
          <Typography type='body'>
            <div>
              {this.renderProps(props.componentItem.props)}
            </div>
          </Typography>
        </Cell>
      </Grid>
    );
  }
}

export default ReactDocSection;
