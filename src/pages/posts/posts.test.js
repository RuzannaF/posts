import { sortPosts } from './sortPosts';
import { filterByUserId } from './filterByUserId';
import { fakePosts } from './fakePosts';

describe('Тестирование функции сортировки и фильтрации', () => {
  test('Сортировка от A до Z', () => {
    const sortedPosts = sortPosts(fakePosts, 'AZ')
    const expectedSortedPosts = fakePosts.slice().sort((a, b) => a.title.localeCompare(b.title))
    expect(sortedPosts).toEqual(expectedSortedPosts)
  })

  test('Сортировка от Z до A', () => {
    const sortedPosts = sortPosts(fakePosts, 'ZA')
    const expectedSortedPosts = fakePosts.slice().sort((a, b) => b.title.localeCompare(a.title))
    expect(sortedPosts).toEqual(expectedSortedPosts)
  })

  test('Посты пользователя 1', () => {
    const userId = 1
    const filteredPosts = filterByUserId(fakePosts, userId)
    const expectedFilteredPosts = fakePosts.filter(post => post.userId === userId)
    expect(filteredPosts).toEqual(expectedFilteredPosts)
  })

  test('Посты пользователя 2', () => {
    const userId = 2
    const filteredPosts = filterByUserId(fakePosts, userId)
    const expectedFilteredPosts = fakePosts.filter(post => post.userId === userId)
    expect(filteredPosts).toEqual(expectedFilteredPosts)
  })
})