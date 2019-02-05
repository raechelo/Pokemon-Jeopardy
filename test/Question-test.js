import chai from 'chai';
const expect = chai.expect;

import Question from '../src/Question';


describe('Question', function() {
  beforeEach(function() {
    const question = new Question();
  });

  it('should have lots of default properties', () => {
    expect(question).to.equal('Question?');
    expect(question).to.have.property('answer');
    expect(question).to.have.property('category');
    expect(question).to.have.property('categoryId');
  });

})