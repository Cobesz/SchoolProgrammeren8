interface Subject {
    register(observer: Observer): void
    unRegister(observer: Observer): void
    notifyObserver(): void
}