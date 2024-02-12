<template>
  <div>
    <div class="card p-2">
      <img
        class="rounded-full w-full h-full"
        src="/images/profile-picture.jpg"
        alt="profile-image"
      />
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  cursor: pointer;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 160px;
  height: 160px;
  border-radius: 999px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card::after {
  content: '';
  z-index: -1;
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  transform: translate3d(0, 0, 0) scale(0.97);
  filter: blur(20px);
}

.heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}

.card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  color: #e81cff;
  font-weight: 600;
}

.card:hover::after {
  filter: blur(30px);
}

.card:hover::before {
  transform: rotate(-90deg) scaleX(1.05) scaleY(1.05);
}
</style>
