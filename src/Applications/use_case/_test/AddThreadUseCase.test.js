const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */
    // Arange
    const mockThreadRepository = new ThreadRepository();
    const mockReturnAddThread = new AddedThread({
      id: 'thread-123',
      title: 'this is tittle of thread',
      owner: 'user-123',
    });
    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockReturnAddThread));

    const useCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });
    const useCasePayLoad = {
      title: 'this is tittle of thread',
      body: 'this is body of thread',
      owner: 'user-123',
    };

    const expectedAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'this is tittle of thread',
      owner: 'user-123',
    });

    // Action
    const addedThread = await useCase.execute(useCasePayLoad);

    // Assert
    expect(addedThread).toEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(useCasePayLoad);
  });
});
