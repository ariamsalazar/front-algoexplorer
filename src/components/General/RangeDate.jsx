import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './RangeDate.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '0px 20px',
  },
  margin: {
    height: theme.spacing(3),
  },
  markLabel: {
    '&[data-index="1"]': {
      left: '10%',
    }
  }
}));

const marks = [
  {
    value: 0,
    label: 'Weekly'
  },
  {
    value: 50,
    label: 'Monthly'
  },
  {
    value: 100,
    label: 'Yearly'
  }
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function RangeDate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Slider
            defaultValue={0}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
        />
        <div class="mark-input">0.001 Algos</div><div class="mark-input">0.001 Algos</div><div class="mark-input">0.001 Algos</div>
    </div>
  );
}