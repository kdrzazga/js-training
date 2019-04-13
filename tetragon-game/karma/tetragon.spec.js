//Node.js required to run Unit Tests
describe('Tetragon tests', () => {

    it('should compute distance correctly', () => {
        // given
        let cellA1Id = 'a1';
        let cellA2Id = 'a2';

        // when
        let distanceA1A2 = distance(cellA1Id, cellA2Id);

        // then
        expect(distanceA1A2 = 1);
    });
});
