function solution(address) {
    const lastAtIndex = address.lastIndexOf('@');
    const domain = address.substring(lastAtIndex + 1);
    return domain;
}
