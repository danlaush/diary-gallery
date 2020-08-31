import { h } from "../lib/preact.js";
import { useState, useEffect } from "../lib/hooks.js";
import htm from "../lib/htm.js";
const html = htm.bind(h);

const proxy = 'https://cors-anywhere.herokuapp.com/';
const formEndpoint = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdr7jHJoX5uwNAIdc2pZ4x7zNiy_LORcLuGvZOeAE9byG1brA/formResponse';

const Contribute = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [entry, setEntry] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    const body = new FormData();
    body.append('entry.1106303798_year', year)
    body.append('entry.1106303798_month', month)
    body.append('entry.1106303798_day', day)
    body.append('entry.1758352535', entry)
    body.append('entry.745367304', comments)

    try {
      const res = await fetch(proxy + formEndpoint, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8080/?#/contribute'
        },
        body
      })
      setSuccess(true)
      setError(false);
    } catch(err) {
      console.log('Error submitting to Google Forms', err);
      setError(true)
    }
    setIsSubmitting(false);
  }

  const extractValue = callback => event => callback(event.target.value);

  const resetForm = () => {
    setYear('')
    setMonth('')
    setDay('')
    setEntry('')
    setComments('')
    setSuccess(false)
    setError(false)
  }

  return html`
    <div className="container">
      <h1>Contribute a diary entry</h1>
      <p>There is a lot more content scanned than is transcribed, and not all the transcriptions are 100% accurate. If you see an entry that needs a transcription or a correction, please submit the form below.</p>
      <form onSubmit="${submit}">
        <div class="form-group">
          <label htmlFor="year">Year</label>
          <input id="year" type="text" pattern="[0-9]+" value="${year}" onInput="${extractValue(setYear)}" />
        </div>
        <div class="form-group">
          <label htmlFor="month">Month</label>
          <input id="month" type="text" pattern="[0-9]+" value="${month}" onInput="${extractValue(setMonth)}" />
        </div>
        <div class="form-group">
          <label htmlFor="day">Day</label>
          <input id="day" type="text" pattern="[0-9]+" value="${day}" onInput="${extractValue(setDay)}" />
        </div>
        <div class="form-group textarea">
          <label htmlFor="entry">Diary entry</label>
          <textarea id="entry" type="text" value="${entry}" onInput="${extractValue(setEntry)}"></textarea>
        </div>
        <div class="form-group textarea">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" type="text" value="${comments}" onInput="${extractValue(setComments)}"></textarea>
        </div>
        <button type="submit" disabled="${isSubmitting}">Submit</button> ${isSubmitting && html`<img class="spinner" src="/assets/spinner.svg" />`}
      </form>
      ${error && html`<p class="error">Sorry, there was an error submitting the form. <button onClick="${submit}">Try again</button></p>`}
      ${success && html`<p class="success">Thanks for contributing! <button onClick="${resetForm}">Submit another</button></p>`}
    </div>
  `
};

export default Contribute;
