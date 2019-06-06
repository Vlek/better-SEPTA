import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <p>
          This is a group project for a university course where we explore
          different software architectures. In developing the solution to
          the real world problem that we wished to attempt to address, we
          are also attempting to learn from our experience.
        </p>
        <p>
          This project was created for Professor Sultanik's SE577 course at
          Drexel University.
        </p>
        <p>
          Software Engineers/Developers: <a
            href="https://github.com/samridhprasad">Sam Prasad
          </a> and <a
            href="https://github.com/pratikshekhar">Pratik Shekhar</a>
        </p>
        <p>
          Software Architect: <a
          href="https://www.github.com/vlek">Derek McCammond</a>
        </p>
      </div>
    )
  }
}
