import React from 'react';
import Checkbox from './Checkbox'
import classes from './styles/Answers.module.css'

const Answers = () => {
    return (
        <>
            <div className={classes.answers}>
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
                <Checkbox className={classes.answer} text='A New Hope 1' />
            </div>
        </>
    );
}

export default Answers;
